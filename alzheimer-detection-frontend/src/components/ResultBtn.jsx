export default function ResultBtn() {
  return (
    <>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Result
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Are you sure you want to see the results?
          </h3>
          <p className="py-4">
            Make sure all of the fields are entered correctly!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="cursor-pointer px-4 mx-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                See Result
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
