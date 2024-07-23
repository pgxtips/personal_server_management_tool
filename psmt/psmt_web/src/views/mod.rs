use askama::Template;

#[derive(Template)]
#[template(path = "landing_dashboard/landing_dashboard.html")] 
pub struct LandingDashboardTemplate;
