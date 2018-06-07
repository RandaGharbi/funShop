import gql from 'graphql-tag';

const CATEGORY_QUERY = gql`
  query category{
    viewer {
      category {
        message
        error
        category{
          categoryId
          categoryName
          categoryDescription
        }
      }
    }
  }
`;
export default CATEGORY_QUERY;
