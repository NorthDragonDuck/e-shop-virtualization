from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Hello from vhost2')

httpd = HTTPServer(('0.0.0.0', 8080), SimpleHTTPRequestHandler)
httpd.serve_forever()