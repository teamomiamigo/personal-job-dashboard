const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');

const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.JOBS_TABLE_NAME;

exports.handler = async (event) => {
  console.log('Get job event:', JSON.stringify(event, null, 2));

  try {
    // TODO: Extract userId from Cognito JWT token
    const userId = 'temp-user-id'; // Placeholder until auth is implemented
    const jobId = event.pathParameters.id;

    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        jobId,
      },
    });

    const result = await dynamoClient.send(command);

    if (!result.Item) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Job not found' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error('Error getting job:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to get job' }),
    };
  }
};

