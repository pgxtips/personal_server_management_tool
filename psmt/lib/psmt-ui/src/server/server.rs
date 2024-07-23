use actix_web::{ App, HttpServer };

use crate::controllers::get_controller;

pub async fn server_start() -> std::io::Result<()>{

    log::info!("Server started port 8080");

    HttpServer::new(move || {
        App::new()
            .service(get_controller::landing_dashboard)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
