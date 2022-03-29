import {
	Avatar,
	Box,
	Button,
	Circle,
	Flex,
	Icon,
	IconButton,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MutableRefObject, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export function WhatsappButton() {
	const [count, setCount] = useState(0);
	// useRef
	const initialFocusRef = useRef() as MutableRefObject<HTMLInputElement>;

	return (
		<Stack direction="row" position={"fixed"} bottom={19} right={20} py="3">
			<Circle size="60px" bg="tomato" color="white">
				<Popover
					initialFocusRef={initialFocusRef}
					placement="top-end"
					closeOnBlur={false}
					closeOnEsc={false}
					openDelay={900}
				>
					<PopoverTrigger>
						<IconButton
							colorScheme="whatsapp"
							isRound
							width="100%"
							height="100%"
							aria-label="Whatsapp"
							icon={<Icon as={BsWhatsapp} w={34} h={34} />}
						/>
					</PopoverTrigger>

					<PopoverContent color="white" bg="white" textColor="white" maxW="700">
						<PopoverHeader pt={4} border="0" bg="whats.primary">
							<Stack direction="row">
								<Avatar src="https://bit.ly/broken-link" />
								<Box ml={2}>
									<Box fontWeight="bold">
										<Text as="abbr">John Doe</Text>
									</Box>
									<Box>
										<Text>Online</Text>
									</Box>
									<PopoverCloseButton m="5" fontSize="sm" />
								</Box>
							</Stack>
						</PopoverHeader>

						<PopoverArrow />
						<PopoverBody
							bg="url(../public/whatsapp-bg.jpg)"
							height={300}
							overflowY="auto"
							h="400"
						>
							<Flex direction="column" textColor="black">
								<Box bg="white" p="3" my="1" borderRadius="10" w="75%">
									<Text fontSize="xl" fontWeight="light">
										Bem vindo ao nosso atendimento por Whatsapp.
									</Text>
								</Box>
								<Box bg="white" p="3" my="1" borderRadius="10" w="75%">
									<Text fontSize="xl" fontWeight="light">
										Informe seus dados abaixo para iniciar a conversa:
									</Text>
								</Box>
							</Flex>
							<Flex direction="column" alignItems="flex-end" textColor="black">
								<Box bg="green.200" p="3" my="1" borderRadius="10" w="75%">
									<Input placeholder="Seu Nome" bg="white" m="1" />
									<Input placeholder="Seu e-mail" bg="white" m="1" />
									<Input placeholder="Seu telefone" bg="white" m="1" />
								</Box>
							</Flex>
							<Button
								bg="whats.primary"
								_hover={{
									bg: "green.700",
								}}
								size="lg"
								w="100%"
								my="3"
							>
								Iniciar conversa
							</Button>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Circle>
		</Stack>
	);
}
