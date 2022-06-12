var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(builder =>
{
    builder.WithOrigins("https://localhost:7150")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
    .WithExposedHeaders("custom-header");
});

app.MapGet("/", async (HttpContext context) =>
{
    context.Response.Headers.Add("custom-header", "custom header secret");
    await context.Response.WriteAsync("Data Set");
});

app.MapGet("/login", async (HttpContext context) =>
{
    string? login = context.Request.Cookies["login"];
    await context.Response.WriteAsync($"Login: {login}");
});

app.Run();
