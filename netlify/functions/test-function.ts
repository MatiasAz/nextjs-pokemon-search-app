import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    console.log("Received event:", event);

    return {
        statusCode: 200,
    };
};

export { handler };