import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ id, name, img, symbol, price, currencySymbol='₹' }) => {
    return (
        <Link to={`/coins/${id}`} >
            <VStack
                w={'52'}
                shadow={'lg'}
                p={'8'}
                m={'4'}
                borderRadius={'lg'}
                transition={'all 0.3s'}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)",
                        background: '#efefef'
                    }
                }} >
                <Image src={img} w={10} h={10} objectFit={'contain'} alt={'Exhange'} />
                <Heading size={'md'}  >{symbol}</Heading>
                <Text noOfLines={1} >{name}</Text>
                <Text noOfLines={1} >{price? `${currencySymbol}${price}`:"NA"}</Text>
            </VStack>
        </Link>
    )
}

export default CoinCard