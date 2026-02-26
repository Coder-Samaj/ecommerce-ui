import React from 'react'
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { categoryName } = useParams();
  return (
    <div>CategoryPage {categoryName}</div>
  )
}

export default CategoryPage