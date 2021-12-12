import ItensCarrinho from "./itensCarrinho";

export const CreateTable= async()=>{
    await ItensCarrinho.createTable
    console.log("tabela carrinho inicializada");
}


//essa funçao tem que ser chamada na home ou na descrição do produto, no botão de comprar
export const addItem = async(nome, preco, imagem, categoria)=>{
    const prodCarrim = new ItensCarrinho({
        nome : nome,
        preco : preco,
        imagem: imagem,
        categoria: categoria
    });
    await prodCarrim.save
}

//essa vai ser um use effect na pagina do carrinho, passando direto pra um state que vai ter um map de objetos dps
export const mostrarCarrinho = async()=>{
   return await ItensCarrinho.query
}

//essa vai ser o butão de compra que destroi os objetos, assim quando comprar sai td do carrinho
export const comprar = async()=>{
    await ItensCarrinho.destroyAll
}