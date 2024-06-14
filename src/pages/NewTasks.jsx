
const NewTasks = () => {

    const handleSubmit =async(e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const deadlines = form.deadlines.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const data = {title,deadlines,description,priority};
        console.log(data)

        await fetch("http://localhost:5000/tasks",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
           <h1 className="mt-4 mb-6 text-4xl font-bold text-center">Add New Task</h1>
            <label className="input input-bordered flex items-center gap-2 my-3">
  
  <input 
  type="text" 
  className="grow" 
  placeholder="Title" 
  name="title"
  />
  
</label>
           <label className="input input-bordered flex items-center gap-2 my-3">

  <input 
  type="date" 
  className="grow" 
  placeholder="DeadLines"
  name="deadlines"
  />
</label>
<label className="input input-bordered flex items-center gap-2 my-3">

  <input 
  type="text" 
  className="grow" 
  placeholder="Description"
  name="description"
  />
</label>
           <label className="input input-bordered flex items-center gap-2 my-3">
  
  <input 
  type="text" 
  className="grow" 
  placeholder="Priority"
  name="priority"
  />
</label>

<button
                    type="submit"
                    className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
           </form>
        </div>
    );
};

export default NewTasks;