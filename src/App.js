import { useDispatch, useSelector } from "react-redux";
import { addMember } from "./store/actions/member";
import { useForm } from "react-hook-form";
function App() {
  const member = useSelector((state) => state.member);
  const memberList = member.map((value, i) => {
    return (
      <div key={i + 1}>
        {i + 1}/{value.fullname}: {value.age}
      </div>
    );
  });

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const add = (formData) => {
    dispatch(addMember({ fullname: formData.fullname, age: formData.age }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(add)}>
        fullname: <input type="text" {...register("fullname")} />
        age: <input type="text" {...register("age")} />
        <input type="submit" value="Add new" />
      </form>
      <div>{memberList}</div>
    </div>
  );
}

export default App;
