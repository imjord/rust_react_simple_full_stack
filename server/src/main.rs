use actix_web::{get, App, http,  HttpResponse, HttpServer, Responder};
use actix_cors::Cors;


#[get("/")]
async fn home() -> impl Responder {
    HttpResponse::Ok().json("Home page from Rust!")
}

#[get("/about")]
async fn about() -> impl Responder {
    HttpResponse::Ok().json("About page from Rust!")
}


#[get("/contact")]
async fn contact() -> impl Responder {
    HttpResponse::Ok().json("Contact page from Rust!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allowed_origin("http://localhost:3000")
                    .allowed_methods(vec!["GET"])
                    .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
                    .allowed_header(http::header::CONTENT_TYPE)
                    .max_age(3600),
            )
            .service(home).service(about).service(contact)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
    
}


