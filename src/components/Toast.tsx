
export default  {
    success: (message:string) => {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<div class="relative toast">
                <div class="fixed right-10 top-10 bg-green-50 border border-green-200 shadow-lg shadow-green-200 px-8 py-2 rounded-xl min-w-[300px] max-w-[100vw] flex flex-col">
                    <span class="text-2xl">Success</span>
                    <p class="font-thin">${message}</p>
                    
                </div>
            </div>`
        );
      setTimeout(() => {
        document.querySelector(".toast")?.remove();
        }, 3000);

    },
    error: (message:string) => {
        document.body.insertAdjacentHTML(
            "beforeend",
            `<div class="relative toast">
                    <div class="fixed right-10 top-10 bg-red-50 border border-red-200 shadow-lg shadow-red-200 px-8 py-2 rounded-xl min-w-[300px] max-w-[100vw] flex flex-col">
                        <span class="text-2xl">Error</span>
                        <p class="font-thin">${message}</p>
                        
                    </div>
                </div>`
            );
        setTimeout(() => {
            document.querySelector(".toast")?.remove();
            }, 3000);

    }
}
