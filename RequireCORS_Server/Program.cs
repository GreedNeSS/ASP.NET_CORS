var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("localhost:7241", builder =>
    {
        builder.WithOrigins("https://localhost:7241")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
    options.AddPolicy("Production", builder =>
    {
        builder.WithOrigins("https://www.example.com")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});
var app = builder.Build();

app.UseCors();

app.MapGet("/", async context => await context.Response.WriteAsync("Main Page"))
    .RequireCors("localhost:7241");

app.MapGet("/home", async context => await context.Response.WriteAsync("Home Page"))
    .RequireCors("Production");

app.MapGet("/about", async context => await context.Response.WriteAsync("About Page"))
    .RequireCors(options => options.AllowAnyOrigin());

app.MapGet("/contacts", async context => await context.Response.WriteAsync("Contacts Page"));

app.Run();
