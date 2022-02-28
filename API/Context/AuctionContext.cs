using System.Data.Entity;

public class AuctionContext : DbContext
{
    public AuctionContext(string connectionString) : base(connectionString)
    { }
    public DbSet<ProductEntity> Products { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
