/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const url = event.url.toString(); // Convert the request URL to a string

    // Check if the request is to unity3d.com or related paths
    if (url.includes('unity3d.com')) {
        console.warn(`Blocked request to: ${url}`); // Log the blocked request
        console.log("I WAS BLOCKEDDDDD ON THE SERVER SIDEEEEEEE")
        return new Response('Blocked: Forbidden request to unity3d.com', { status: 403 });
    }

    // Allow other requests to proceed as usual
    return resolve(event);
}
