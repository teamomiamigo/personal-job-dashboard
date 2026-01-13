const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');

const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE_NAME = process.env.JOBS_TABLE_NAME;

exports.handler = async (event) => {
  console.log('Create job event:', JSON.stringify(event, null, 2));

  try {
    // TODO: Extract userId from Cognito JWT token
    const userId = 'temp-user-id'; // Placeholder until auth is implemented
    
    const body = JSON.parse(event.body);
    const jobId = uuidv4();
    const now = new Date().toISOString();

    const job = {
      userId,
      jobId,
      company: body.company || '',
      role: body.role || '',
      locationType: body.locationType || 'remote',
      status: body.status || 'applied',
      appliedDate: body.appliedDate || now,
      followupDate: body.followupDate || null,
      jobUrl: body.jobUrl || '',
      contactName: body.contactName || null,
      notes: body.notes || null,
      createdAt: now,
      updatedAt: now,
    };

    await dynamoClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: job,
    }));

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(job),
    };
  } catch (error) {
    console.error('Error creating job:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to create job' }),
    };
  }
};

