using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using MpCertificadoVrs2.data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseCors(opcoes => opcoes
    .WithOrigins("http://localhost:4200") // endereço do front
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials());
app.UseAuthorization();
app.MapControllers();
app.Run();
