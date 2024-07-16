import React, { useEffect, useState } from 'react'

export default function ProductFilter({setUrlquery}) {
  const [category,setCategory] = useState ([])
  const [filterValue,setFilterValue] = useState({
    q:"",
    category:"",
    price_lte:"",
    price_gte:""
  })

  useEffect(()=>{
    fetch("https://api2-taupe-one.vercel.app/categories")
    .then((res)=>res.json())
    .then((data)=>setCategory(data))
  },[])


  function changeInputValue(e){

    setFilterValue((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  return (
    <form  onSubmit={(e)=>{
      e.preventDefault()

      // Submition(filterValue.search,filterValue.category,filterValue.maxPrice,filterValue.minPrice)
      let arr =[]


for(let key in filterValue){
  if(filterValue[key]){
  arr.push(`${key}=${filterValue[key]}`)}
}
setUrlquery(arr.join("&")) 

    }} id='filter-form' className='d-flex flex-wrap gap-3 filter-form mb-3 '>
    <input className='shop-filter__input' placeholder='search...' type='text'

    value={filterValue.q}
    name='q'
        onChange={(e)=>{
     changeInputValue(e)
        }}
    />
    <select 
    value={filterValue.category}
    name='category'
        onChange={(e)=>{
     changeInputValue(e)
        }}
     className='shop-filter__input '>
        <option value={""}>choose an category</option>
        {category.map((cat)=>{
            return(
                <option key={`shop_filter_Category${cat.name}`} value={cat.name}>{cat.name}</option>

            )
        })}
    </select>
    <input  value={filterValue.price_lte} className=' shop-filter__input' placeholder='max price' type='number'
       name='price_lte'
        onChange={(e)=>{
     changeInputValue(e)
        }} />
    <input value={filterValue.price_gte} className=' shop-filter__input' placeholder='min price' type='number'
       name='price_gte'
        onChange={(e)=>{
     changeInputValue(e)
        }}/>
    <input className=' shop-filter__input btn btn-primary'
       type='submit'/>
    <input className=' shop-filter__input btn btn-primary '  type='reset' onClick={()=>{
      setFilterValue({
    q:"",
    category:"",
    price_lte:"",
    price_gte:""
  })
  setUrlquery("")
    }} />
      
    </form>
  )
}

