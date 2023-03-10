import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
  opacity: 0;
  border-radius: 10px;
  transition: all 0.5s ease;
`

const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f5fbfd;
   position: relative;

   &:hover ${Info} {
     opacity: 1;
   }
`
const Circle = styled.div` 
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: #fff;
   position: absolute;
   
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;


  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Products = ({product}) => {
  return (
    <Container>
        <Circle />
        <Image src={product.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}


export default Products