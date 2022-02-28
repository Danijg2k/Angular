using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Product")]
public class ProductEntity
{

    [MaxLength(100)]
    public string Name { get; set; }
    [MaxLength(200)]
    public string Description { get; set; }
    public int Price { get; set; }
    public string Image { get; set; }
    public string[] Colors { get; set; }
    public int Id { get; set; }

}
