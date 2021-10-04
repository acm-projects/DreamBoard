// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ProductSearchClient();

async function createProductSet() {
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const projectId = 'focal-limiter-308619';
  const location = 'us-west1';
  const productSetId = 'PS_CLOTH-SHOE_070318';
  const productSetDisplayName = 'CLOTH-SHOE';

  // Resource path that represents Google Cloud Platform location.
  const locationPath = client.locationPath(projectId, location);

  const productSet = {
    displayName: productSetDisplayName,
  };

  const request = {
    parent: locationPath,
    productSet: productSet,
    productSetId: productSetId,
  };

  const [createdProductSet] = await client.createProductSet(request);
  console.log(`Product Set name: ${createdProductSet.name}`);
}
createProductSet();