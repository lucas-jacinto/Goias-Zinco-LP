

const Header = ({title,image,children}) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_container-bg">
          <img src={image} alt="Imagem de fundo" />
        </div>
        <div className="header_conteudo">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header