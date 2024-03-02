import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>BeraCrypt Farm</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={3} fontSize="xl"
                    _hover={{
                        textDecoration: "none",
                        border: "1px solid black",
                        borderRadius: "3px",
                        bg: "green.200",
                        
                        }}>Play</Link>
                    <Link href={"/shop"} mx={3} fontSize="xl"
                    _hover={{
                        textDecoration: "none",
                        border: "2px solid black",
                        borderRadius: "3px",
                        bg: "blue.200",
                        }}>Shop</Link>
                </Flex>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
};