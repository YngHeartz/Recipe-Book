import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  function CardDefault() {
    return (
      <Card className="mt-6 w-96 border border-gray-300 rounded-md overflow-hidden">
        <CardHeader color="blue-gray" className="relative h-40">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="w-full h-full object-cover rounded-t-md"
          />
        </CardHeader>
        <CardBody className="p-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            
          </Typography>
        </CardBody>
        <CardFooter className="=">
          <Button className="bg-black text-white font-semibold rounded-md ml-3 size-11 w-auto p-3">Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  
  export default CardDefault;
  