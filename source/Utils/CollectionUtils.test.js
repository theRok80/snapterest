import CollectionUtils from './CollectionUtils';

describe('CollectionUtils', () => {
  const collectionTweetsMock = {
    collectionTweet7: {},
    collectionTweet8: {},
    collectionTweet9: {},
    collectionTweet10: {},
  };

  test('getNumberOfTweetsInCollection returns a number of tweets in collection',
      () => {
        const actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(
            collectionTweetsMock);
        const expectedNumberOfTweetsInCollection = 4;

        expect(actualNumberOfTweetsInCollection).
            toBe(expectedNumberOfTweetsInCollection);
      });

  test('isEmptyCollection checks if collection in not empty', () => {
    const actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(
        collectionTweetsMock);

    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);
  });
});