use actix_web::{HttpResponse, Responder};
use askama::Template;
use crate::views;

pub async fn page() -> impl Responder { 
    let template = views::LandingDashboardTemplate;
    let rendered = template.render().unwrap();
    HttpResponse::Ok().body(rendered)
}
