using System.Data.Entity;

public class BidContext : DbContext
{
    public BidContext(string connectionString) : base(connectionString)
    { }
    public DbSet<BidEntity> Bids { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
