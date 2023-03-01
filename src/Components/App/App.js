import { Form } from "../Form/Form";

export const App = () => {
  
  return (
    <div className="mx-auto bg-gradient-to-b from-blue-500 to-white h-screen w-screen text-white font-serif italic">
      <h1 className="text-4xl text-center p-4">
        Take What You Need
      </h1>
      <Form />
    </div>
  );
}
