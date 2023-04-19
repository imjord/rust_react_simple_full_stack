use actix_web::{get, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn home() -> impl Responder {
    HttpResponse::Ok().json("Home page")
}

#[get("/about")]
async fn about() -> impl Responder {
    HttpResponse::Ok().json("About Page")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(home).service(about))
        .bind(("localhost", 8080))?
        .run()
        .await
}


