package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"bloop/graph/generated"
	"bloop/graph/model"
	"context"
	"time"
)

func (r *queryResolver) Hello(ctx context.Context) (*model.Greet, error) {
	result := model.Greet{Text: "Hello There", Time: time.Now().String()}
	return &result, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
