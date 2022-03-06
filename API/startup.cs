using AutoMapper;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews();

        // Para utilizar un solo context sin problemas cambiamos -> 'AddSingleton' por 'AddTransient' en la siguiente línea
        services.AddTransient<AuctionContext>(_ =>
            new AuctionContext(Configuration.GetConnectionString("DefaultConnection")));


        var mapperConfig = new MapperConfiguration(mc =>
        {
            mc.AddProfile(new ProductProfile());
            mc.AddProfile(new BidProfile());
        });

        IMapper mapper = mapperConfig.CreateMapper();
        services.AddSingleton(mapper);

        services.AddSingleton<IProductService, ProductService>();
        services.AddSingleton<IBidService, BidService>();

    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();

        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());


        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
        });
    }
}