import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CATEGORY_QUERY from "../../graphql-commons/Queries/getCategory";

const createMutation = gql`
mutation filterCategory(
  $categoryId: String!
  $categoryName: String!
  $categoryDescription: String!
){
  filterCategory(
    categoryId: $categoryId
    categoryName: $categoryName
    categoryDescription: $categoryName
  ) {
    error
    category{
      categoryId
      categoryName
      categoryDescription
    }
  }
}
`
const withCreateCategory = graphql(createMutation, {
  props: ({ mutate }) => ({
    creatCategory: (
      categoryId,
      categoryName,
      categoryDescription,
    ) =>
      mutate({
        variables: {
          categoryId,
          categoryName,
          categoryDescription,
        },
        refetchQueries: [
          {
            query: CATEGORY_QUERY,
          },
        ],
      }),
  }),
});

export default withCreateCategory;