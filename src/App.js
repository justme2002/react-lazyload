import logo from './logo.svg';
import './App.css';
import { data } from './libs/datas'
import LazyLoad from 'react-lazyload'
import { Box, Center, Container, HStack, Skeleton, Spinner, Stack, Text } from '@chakra-ui/react'


const Loading = () => {
  return (
    <div>
      {/* <Stack mt = "30px">
        <Skeleton h = {"20px"} />
        <Skeleton h = {"20px"} />
        <Skeleton h = {"20px"} />
      </Stack> */}
        <Center h = {"200px"}>
          <Spinner size = "xl"/>
        </Center>
    </div>
  )
}

const Post = ({ id, title, body }) => {
  return (
    <div>
        <Text fontSize={"20px"}>{title}</Text>
        <Text mt = {"20px"} fontSize={"12px"}>{body}</Text>
    </div>
  )
} 

function App() {
  return (
    <div>
    <Container maxW = {"container.xl"}>
      {data.map(d => (
        <LazyLoad key = {d.id} offset={[-100, 100]}  placeholder = {<Loading />}>
        <Box bg = "teal" color = "white" mt = "3px" h = "200px">
          <Post id = {d.id} title = {d.title} body= {d.body} />
        </Box>
        </LazyLoad>
      ))}
      </Container>
    </div>
  );
}

export default App;
