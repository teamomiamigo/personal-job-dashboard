const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.JOBS_TABLE_NAME;

exports.handler = async (event) => {
  console.log('Delete job event:', JSON.stringify(event, null, 2));

  try {
    // TODO: Extract userId from Cognito JWT token
    const userId = 'temp-user-id'; // Placeholder until auth is implemented
    const jobId = event.pathParameters.id;

    const command = new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        jobId,
      },
    });

    await dynamoClient.send(command);

    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: '',
    };
  } catch (error) {
    console.error('Error deleting job:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to delete job' }),
    };
  }
};

