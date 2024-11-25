export const SearchFilter =({search,setSearch,filter,setFilter})=>{


      const handleInputChange =(event)=>{
            event.preventDefault();
            setSearch(event.target.value);
      };

      const handleSelectChange =(event)=>{
            event.preventDefault();
            setFilter(event.target.value)
      };

      return (
<section className="section-searchFilter container" >
<input
 type="text"
  placeholder="search"
   value={search} 
   onChange={handleInputChange}/>

   <div>
      <select className="select-section" value={filter} on onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="india">India</option>

      </select>
   </div>

</section>
      );
};