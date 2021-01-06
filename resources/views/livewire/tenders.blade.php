<div>
    <div class="row justify-content-center">
        <div class="col-sm-12 col-md-11">
        <h4>Procurement Notices</h4>
        <div class="card">
            <div class="card-header">
                <input type="text" class="form-control full-width" wire:model='query' placeholder="Search Tender by Product"/>
               
            </div>
            <div class="card-body">
                <div class="table-responsive-sm">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>City</th>
                                <th>Tender Number</th>
                                <th>Classification</th>
                                <th>Description</th>
                                <th>Closing Date</th>
                                <th>Bid Value</th>
                            </tr>
                        </thead>
                        <tbody>
                             @forelse($notices as $notice)
                            <tr>
                                <td>{{$notice->company->name}}</td>
                                <td>{{$notice->company->city}}</td>
                                <td>{{$notice->tendernumber}}</td>
                                <td>{{$notice->classification->name}}</td>
                                <td>{{$notice->description}}</td>
                                <td>{{$notice->close_date}}</td>
                                <td>{{$notice->currency->name}}{{$notice->bidvalue}}</td>
                            </tr>

                            @empty
                            <tr><td colspan="7">No Tenders Uploaded As Yet</td></tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>

    </div>
</div>
