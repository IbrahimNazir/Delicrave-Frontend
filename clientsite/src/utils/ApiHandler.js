import axios from "axios";
import Config from "./Config";


// CRUD Flavors
export const apiGetAllFlavors = async () => {
    try {
        const response = await axios.get(Config.flavorsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const apiSaveFlavor = async (name) => {

    console.log('apiSaveFlavor', name)
    try {
        const response = await axios.post(Config.flavorsUrl, { name: name });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

export const apiDeleteFlavor = async (id) => {

    console.log('apiSaveFlavor', id)
    try {
        const response = await axios.delete(`${Config.flavorsUrl}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};
export const apiEditFlavor = async (id, name) => {
    console.log('apiSaveFlavor', id, name)
    try {
        const response = await axios.put(`${Config.flavorsUrl}${id}/`, { name: name });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

// CRUD Categories
export const apiGetAllCategory = async () => {
    try {
        const response = await axios.get(Config.categoriesUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const apiSaveCategory = async (name) => {

    console.log('apiSaveCategory', name)
    try {
        const response = await axios.post(Config.categoriesUrl, { name: name });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

export const apiDeleteCategory = async (id) => {

    console.log('apiSaveFlavor', id)
    try {
        const response = await axios.delete(`${Config.categoriesUrl}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};
export const apiEditCategory = async (id, name) => {
    console.log('apiSaveFlavor', id, name)
    try {
        const response = await axios.put(`${Config.categoriesUrl}${id}/`, { name: name });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};


// CRUD Units
export const apiGetAllUnit = async () => {
    try {
        const response = await axios.get(Config.unitsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const apiSaveUnit = async (name) => {

    console.log('apiSaveFlavor', name)
    try {
        const response = await axios.post(Config.unitsUrl, { name: name });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

export const apiDeleteUnit = async (id) => {

    console.log('apiSaveFlavor', id)
    try {
        const response = await axios.delete(`${Config.unitsUrl}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

// CRUD Desserts
export const apiGetAllDessert = async () => {
    try {
        const response = await axios.get(Config.dessertsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const apiSaveDessert = async (name, price, stockquantity, unit, description, category, flavor) => {
    console.log('apiSaveFlavor', name, price, stockquantity, unit, description, category, flavor)
    try {
        const response = await axios.post(Config.dessertsUrl, { name: name, stockquantity: stockquantity, description: description, price: price, unit: unit, category: category, flavor: flavor });
        // const response2 = await axios.post(Config.catalogitemsUrl, { category: category, flavor: flavor });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};


export const apiRetrieveDessert = async (id) => {
    console.log('apiSaveFlavor', id)
    try {
        const response = await axios.get(`${Config.dessertsUrl}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};


export const apiDeleteDessert = async (id) => {

    console.log('apiSaveFlavor', id)
    try {
        const response = await axios.delete(`${Config.dessertsUrl}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};


// 'id', 'name', 'stockquantity', 'description', 'price', 'unit', 'category', 'flavor'

export const apiEditDessert = async (id, name, price, stockquantity, unit, description, category, flavor) => {
    console.log('apiSaveFlavor', id, name, price, stockquantity, unit, description, category, flavor)
    try {
        const response = await axios.put(`${Config.dessertsUrl}${id}/`, { name: name, stockquantity: stockquantity, description: description, price: price, unit: unit, category: category, flavor: flavor });
        return response.data;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};



// CRUD Order
export const apiGetAllOrders = async () => {
    try {
        const response = await axios.get(Config.ordersUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const apiEditOrders = async (id, date, status, totalamount, paymethod, rating, review, customer) => {
    try {
        console.log(id, date, status, totalamount, paymethod, rating, review, customer)
        const response = await axios.put(`${Config.ordersUrl}${id}/`, { status:status, customer:customer });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


// CRUD OrderItems
export const apiGetAllOrderItems = async (orderId) => {
    try {
        const response = await axios.get(`${Config.orderItemsUrl}${orderId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// CRUD Desserts by
export const apiGetAllDessertsByCategory = async (categoryId) => {

    try {
        console.log(`${Config.dessertsbycategory}${categoryId}/`)
        const response = await axios.get(`${Config.dessertsbycategory}${categoryId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
// CRUD Desserts by
export const apiGetAllCartItemsByCustomerId = async (customerId) => {

    try {
        console.log(`${Config.cartitemsbycustomerid}${customerId}/`)
        
        const response = await axios.get(`${Config.cartitemsbycustomerid}${customerId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//wishlist
export const apiGetAllWishlistItemsByCustomerId = async (customerId) => {

    try {
        console.log(`${Config.wishlist}${customerId}/`)
        
        const response = await axios.get(`${Config.wishlistsUrl}${customerId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};





//wishlist
export const apiGetAllOrderTrackItemsByCustomerId = async (customerId) => {

    try {
        console.log(`${Config.wishlist}${customerId}/`)
        
        const response = await axios.get(`${Config.wishlistsUrl}${customerId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//OrderHistory
export const apiGetAllOrderHistoryItemsByCustomerId = async (customerId) => {

    try {
        console.log(`${Config.orderhistory}${customerId}/`)
        const response = await axios.get(`${Config.orderhistory}${customerId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};





