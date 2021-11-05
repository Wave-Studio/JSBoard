export default function step3(props: {page: number}) {
  if (props.page !== 3) {
    return null;
  }
  return (
    <>
      <div className="flex-grow rounded-md shadow-md bg-coolGray-800 p-5 my-10 text-gray-200">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">
          Create a theme for your forums
          <br />
          <span className="text-sm font-medium">
            You can always change these later!
          </span>
          {/*<hr className="border-t-2 border-gray-200 border-opacity-50 " />*/}
        </h2>
        <h3 className="text-gray-200 font-medium">
          Select one of our beautifuly handcrafted default user themes{" "}
          <span className="font-extralight">(we reccomend dark!)</span>
        </h3>
        <div className="flex py-4 space-x-4">
          <input
            type="radio"
            name="theme"
            className="appearance-none transition bg-coolGray-900 text-coolGray-900 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-black focus:checked:ring-opacity-50 ring-opacity-50 fill-black-yes"
            defaultChecked
          />
          <input
            type="radio"
            name="theme"
            className="appearance-none transition bg-white text-white p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800 focus:checked:ring-white focus:checked:ring-opacity-50 ring-opacity-50"
          />
        </div>
        <h3 className="text-gray-200 font-medium">
          Choose a luxurious accent color from an expertly-crafted color
          palette
        </h3>
        <div className="flex py-4 space-x-4">
          <input
            type="radio"
            name="colors"
            className="appearance-none transition bg-blue-600 text-blue-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-blue-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-blue-600 focus:checked:ring-opacity-50 ring-opacity-50"
            defaultChecked
          />
          <input
            type="radio"
            name="colors"
            className="appearance-none transition bg-green-600 text-green-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-green-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-green-600 focus:checked:ring-opacity-50 ring-opacity-50"
          />
          <input
            type="radio"
            name="colors"
            className="appearance-none transition bg-red-600 text-red-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-red-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-red-600 focus:checked:ring-opacity-50 ring-opacity-50"
          />
          <input
            type="radio"
            name="colors"
            className="appearance-none transition bg-purple-600 text-purple-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-purple-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-purple-600 focus:checked:ring-opacity-50 ring-opacity-50"
          />
          <input
            type="radio"
            name="colors"
            className="appearance-none transition bg-yellow-600 text-yellow-600 p-4 border-none focus:border-none hover:ring checked:ring cursor-pointer ring-yellow-600 focus:checked:border-none focus:checked:ring-offset-coolGray-800  focus:checked:ring-yellow-600 focus:checked:ring-opacity-50 ring-opacity-50"
          />
        </div>
        <h3 className="text-gray-200 font-medium">
          Pick an image or color gradient that represents your community
        </h3>
        <div className="border-2 border-gray-300 border-opacity-25 rounded-lg max-w-xl mt-3 p-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-600 h-12 rounded-lg relative">
            <span className="absolute bottom-0 right-2 text-gray-400 italic flex">
              Preview
            </span>
          </div>
          <fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
            <legend className="text-center px-1 font-medium">
              Starting Gradient
            </legend>
            <input
              type="text"
              className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
              defaultValue="#34D399"
              maxLength={7}
            />
          </fieldset>
          <fieldset className="border-2 border-gray-300 border-opacity-25 rounded-lg mt-3 flex justify-center">
            <legend className="text-center px-1 font-medium">
              Ending Gradient
            </legend>
            <input
              type="text"
              className="border-none !bg-opacity-0 focus:ring-0 text-center w-full"
              defaultValue="#2563EB"
              maxLength={7}
            />
          </fieldset>
        </div>
        //color picker here?
      </div>
    </>
  );
}
