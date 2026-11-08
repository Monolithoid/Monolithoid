# Local development

This portfolio is static: no dependencies, build step, credentials or external runtime services are required. Use the existing checkout; cloud tasks are already isolated. Do not create a Git worktree unless explicitly requested.

From `/workspace/Monolithoid`, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Confirm the server responds with `curl -fsS http://127.0.0.1:8000/`. In a browser, check all nine projects, all four theme filters, FR/EN switching, persistence after reload, and mobile layout. A server process must be started again in a new cloud task.

`index.html` contains the page, `style.css` the responsive layout, and `app.js` the project list and French/English text. The list is a curated snapshot of public GitHub repositories on November 8, 2026; it does not update automatically.

The page can be hosted as static files. Publication and GitHub Pages configuration have not been performed.
