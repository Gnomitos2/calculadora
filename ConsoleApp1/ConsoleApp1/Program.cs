using System.Diagnostics.CodeAnalysis;
using System.Xml.Xsl;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("elija un numero del 1 al 10");

            int input = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("seleccione otro numero");

            int input2 = Convert.ToInt32(Console.ReadLine());

            int suma = input + input2;

            Console.WriteLine($"la suma de {input} + {input2} es igual a {suma}");





        }
    }
}
