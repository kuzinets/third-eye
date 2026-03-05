"""Third Eye — Local HTTP server."""
import http.server
import os

PORT = 9471
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"Third Eye running at http://localhost:{PORT}")
with http.server.HTTPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    httpd.serve_forever()
