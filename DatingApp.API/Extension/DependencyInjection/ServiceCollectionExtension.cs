using DatingApp.API.Data;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Extension.DependencyInjection
{
   public static class ServiceCollectionExtension
    {
         public static IServiceCollection AddDependencyInjection(this IServiceCollection services)
         {
             services.AddScoped<IAuthRepository, AuthRepository>();
             services.AddScoped<IDatingRepository, DatingRepository>();
             return services;    
         }
    }
}