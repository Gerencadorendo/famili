var images=[
    "https://img.freepik.com/vetores-gratis/dia-internacional-do-design-plano-do-conceito-de-familias_23-2148492790.jpg?w=2000" , "https://i.pinimg.com/originals/0b/37/5f/0b375fb169569a6100a18ecb7d584d0c.jpg" , 
    "https://t.pimg.jp/062/051/845/1/62051845.jpg" , "https://mundoovo.com.br/assets/filhounico.jpg"
];
var nomes = ["Álbum da família", "Pai" , "Mãe" , "Filho"]

var i = 0;
document.getElementById("imagem").src = images[0]
document.getElementById("family").innerHTML = nomes[0];
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 3
    if(i > numbersOfFamilyMemberInArray )
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = nomes[i];
    document.getElementById("imagem").src = updatedImage
    document.getElementById("family").innerHTML = updatedName;
}