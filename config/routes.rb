Rails.application.routes.draw do
  devise_for :users
  root to: 'notes#index'
  resources :notes, only: [:index, :new, :create, :destroy, :checked] do
    collection do
      get 'phase1'
      get 'phase2'
      get 'phase3'
    end
  end
  get 'notes/:id', to: 'notes#checked'
end
