var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("Localhost7169", builder =>
    {
        builder.WithOrigins("https://localhost:7169")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});
var app = builder.Build();

app.UseCors("Localhost7169");

app.MapGet("/", () => Results.Json(new { message = "CORS Policy" }));

app.Run();
