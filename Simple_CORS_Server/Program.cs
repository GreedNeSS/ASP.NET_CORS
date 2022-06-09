var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(builder => builder.AllowAnyOrigin());

app.MapGet("/", () => Results.Json(new {message = "UseCORS server!"}));

app.Run();
