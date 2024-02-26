package com.shopingu.food2home.Callback;

import com.shopingu.food2home.Model.BestDealModel;
import com.shopingu.food2home.Model.CategoryModel;

import java.util.List;

public interface ICategoryCallbackListener {
    void onCategoryLoadSuccess(List<CategoryModel> categoryModelList);
    void onCategoryLoadFailed(String message);
}
