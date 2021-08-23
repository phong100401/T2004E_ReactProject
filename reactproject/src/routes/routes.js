// LAYOUT
import LoginLayout from '../layout/LoginLayout';
import UserLayout from '../layout/UserLayout';
import AdminLayout from '../layout/AdminLayout';

// LOGIN
import LoginCallBack from '../pages/Login';

// USER
import AboutUs from '../pages/User/AboutUs';
import Campaigns from '../pages/User/Campaigns';
import ContactUs from '../pages/User/ContactUs';
import Recipes from '../pages/User/Recipes';

// ADMIN
import AdminDashboard from '../pages/Admin/Dashboard/dashboard';
import ManageCampaigns from '../pages/Admin/ManageCampaigns';
import ManageEvents from '../pages/Admin/ManageEvents';
import ManageRecipes from '../pages/Admin/ManageRecipes';

const LoginCallBackRoute = {
	path: '/login-callback',
	layout: LoginLayout,
	page: LoginCallBack,
};

const AboutUsRoute = {
	path: '/about-us',
	layout: UserLayout,
	page: AboutUs,
};

const CampaignsRoute = {
	path: '/campaigns',
	layout: UserLayout,
	page: Campaigns,
};

const ContactUsRoute = {
	path: '/contact-us',
	layout: UserLayout,
	page: ContactUs,
};

const EventsRoute = {
	path: '/events',
	layout: UserLayout,
	page: ContactUs,
};

const RecipesRoute = {
	path: '/recipes',
	layout: UserLayout,
	page: Recipes,
};

const AdminDashboardRoute = {
	path: '/admin-dashboard',
	layout: AdminLayout,
	page: AdminDashboard,
};

const ManageCampaignsRoute = {
	path: '/manage-campaigns',
	layout: AdminLayout,
	page: ManageCampaigns,
};

const ManageEventsRoute = {
	path: '/manage-events',
	layout: AdminLayout,
	page: ManageEvents,
};

const ManageRecipesRoute = {
	path: '/manage-recipes',
	layout: AdminLayout,
	page: ManageRecipes,
};

export const routes = [
	LoginCallBackRoute,
	AboutUsRoute,
	CampaignsRoute,
	ContactUsRoute,
	EventsRoute,
	RecipesRoute,
	AdminDashboardRoute,
	ManageCampaignsRoute,
	ManageEventsRoute,
	ManageRecipesRoute,
];
