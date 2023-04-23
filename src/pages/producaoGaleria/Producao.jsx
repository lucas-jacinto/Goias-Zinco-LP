import './producao.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/produ3.jpeg'


const Producao = () => {
  const produLenght = 6;
  const images = []

  for(let i = 1; i <= produLenght; i++){
    images.push(require(`../../assets/produ${i}.jpeg`))
  }

  return (
    <>
      <Header title='Nossa Producao' image={HeaderImage}>
        Galeria com os produtos da nossa loja, desde a fabricação até a entrega e instalação na sua residência.
      </Header>
      <section className='producao'>
        <div className='container producao_container'>
          {
            images.map((image,index) =>{
              return(
              <article key={index}>
                <img
                src={image}
                alt={`Imagem da Producao ${index + 1}`} />
              </article>)
            })
          }
        </div>
      </section>
    </>
  )
}

export default Producao