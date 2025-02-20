using System.ComponentModel.DataAnnotations;

namespace TestSPA.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public decimal Price { get; set; }
        [Required]  
        public int Stock { get; set; }
    }

}
